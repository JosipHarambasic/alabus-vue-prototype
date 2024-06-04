import router from "@/router";
import axios, { AxiosRequestConfig } from "axios";
import { IBo } from "./IBo";

export class RESTUtil {
    public static async getAllRecords<R extends IBo>(url: string, auth: AxiosRequestConfig): Promise<R[]> {
        try {
            const response = await axios.get<R[]>('http://localhost:8080/rest/' + url, auth);
            return response.data;
        } catch (e) {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("password");
            console.log(e);
            throw e;
        }

    }
}