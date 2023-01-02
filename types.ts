export interface ResponseState {
    success: boolean;
    message: string;
}

export interface Action{
    type: string;
    payload : ResponseState
}

export interface State{
    isAuthenticated: boolean,
    data: ResponseState
}