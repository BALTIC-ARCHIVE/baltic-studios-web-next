import { useEffect, useState } from "react";
import { useCache } from "../cache-provider";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

type CustomAxiosConfig = AxiosRequestConfig & {
    key: Array<unknown>;
    initialEnabled?: boolean;
    cache?: {
        enabled?: boolean;
        ttl?: number;
    };
    onSuccess?: (data: AxiosResponse) => void;
    onFailure?: (err: AxiosError) => void;
};

function keyify(key: CustomAxiosConfig["key"]) {
    return key.map((item) => JSON.stringify(item)).join("-");
}

export default function useFetch<T = any>({
                                              key,
                                              initialEnabled = true,
                                              cache,
                                              ...axiosConfig
                                          }: CustomAxiosConfig) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T | undefined>();
    const [error, setError] = useState<any>();
    const { getCache, setCache, deleteCache } = useCache();

    const refetch = (hard: boolean = false) => {
        setLoading(true);
        setError(undefined);
        const cacheKey = keyify(key);
        if (cache?.enabled && getCache(cacheKey) !== undefined && !hard) {
            setData(getCache(cacheKey));
            setLoading(false);
            setError(undefined);
            return;
        }
        axios(axiosConfig)
            .then((data) => {
                setData(data as T);
                if (cache?.enabled) setCache(cacheKey, data, cache.ttl);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    function inValidate(invalidationKey: CustomAxiosConfig["key"]) {
        deleteCache(keyify(invalidationKey));
    }

    useEffect(() => {
        if (initialEnabled) refetch();
    }, []);

    return { loading, data, error, refetch, inValidate } as const;
}