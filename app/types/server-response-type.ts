type SuccessResponseServer<T> = {
	data: T;
	page?: {
		size: number;
		totalElements: number;
		totalPages: number;
		number: number;
	};
};

type ErrorResponseServer = {
	status?: number;
	title: string;
	issues?: {
		field: string;
		message: string;
	}[];
	httpStaus?: string | null;
};

export type ServerResponseType<T> = {
	success?: SuccessResponseServer<T>;
	error?: ErrorResponseServer;
};
