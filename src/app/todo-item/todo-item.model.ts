export class TodoItem {
title: string;
detail: string;
dueDate: Date;
createDate: Date;

constructor(title: string, detail: string, dueDate:Date ){

    this.createdDate = new Date();
    this.title = title;
    this.detail = detail;
    this.dueDate = dueDate;
 }
}