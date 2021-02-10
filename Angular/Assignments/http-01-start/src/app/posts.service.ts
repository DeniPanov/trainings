import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";

import { Post } from "./post.model";
import { Subject, throwError } from "rxjs";

const url: string =
  "https://ng-complete-guide-935f6-default-rtdb.firebaseio.com/";
const post: string = "posts.json"; //Firebase requirement!

@Injectable({
  providedIn: "root",
})
export class PostsService {
  constructor(private http: HttpClient) {}

  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    this.http
      .post<{ name: string }>(`${url}${post}`, postData, {
        observe: "response",
      })
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPost() {
    return this.http
      .get<{ [key: string]: Post }>(`${url}${post}`, {
        headers: new HttpHeaders({ "X-Custom-Header": "X-Hello" }),
        params: new HttpParams().set("print", "pritty"),
      })
      .pipe(
        map((responseData) => {
          const postArr: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArr.push({ ...responseData[key], id: key });
            }
          }
          return postArr;
        }),

        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(`${url}${post}`, {
        observe: "events",
        responseType: "json" //default
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
