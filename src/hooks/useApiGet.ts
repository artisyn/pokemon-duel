import { useEffect, useState } from 'react';
import axios from 'axios';

export type TApiResponse = {
	status: Number;
	statusText: String;
	data: any;
	error: any;
	loading: Boolean;
};

export const useApiGet = (url: string): TApiResponse => {
	const [status, setStatus] = useState<Number>(0);
	const [statusText, setStatusText] = useState<String>('');
	const [data, setData] = useState<any>();
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState<boolean>(false);

	const getAPIData = async () => {
		setLoading(true);
		try {
			const rawData = await axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			// getting an array with names and urls
			const namesAndUrls = rawData.data.results;

			// getting an array of promises (to get individual data for each promise)
			const promises: any = namesAndUrls.map((element: any) => {
				const { url } = element;
				return (async () => {
					const { data } = await axios.get(url);
					return data;
				})();
			});
			const resolvedPromises = await Promise.all(promises);
			setStatus(rawData.status);
			setStatusText(rawData.statusText);
			setData(resolvedPromises);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		getAPIData();
	}, [url]);
	return { status, statusText, data, error, loading };
};
