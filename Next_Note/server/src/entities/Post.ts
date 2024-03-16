import { Entity, JoinColumn, Column, Index, OneToMany, BeforeInsert, ManyToOne } from "typeorm"
import { text } from "stream/consumers";
import BaseEntity from "./Entity";
import User from "./User";
import Sub from "./Sub";
import Vote from "./Vote";
import Commont from "./Comment"
import { Exclude, Expose } from "class-transformer";
import { makeId, slugify } from "../utils/helpers";
import Comment from "./Comment";

@Entity("posts")
export default class Post extends BaseEntity {
@Index()
@Column()
identifier:string;
//식별자
@Column()
title:string;

@Index()
@Column()
slog:string;

@Column({ nullable : true, type: "text" })
body:string;

@Column()
subName: string;

@Column()
username:string;

@ManyToOne( () => User, (user) => user.posts)
@JoinColumn({ name:"username", referencedColumnName: "username" })
user: User;

@ManyToOne( () => Sub, (sub) => sub.posts)
@JoinColumn({ name:"subName", referencedColumnName: "name" })
sub: Sub;

@Exclude()
@OneToMany(()=> Comment, (comment) => comment.post)
comments:Comment[];

@Exclude()
@OneToMany(()=> Vote, (vote) => vote.post)
votes:Vote[];

@Expose() get url():string{
    return `/r/${this.subName}/${this.identifier}/${this.slog}`;
}
@Expose() get commentCount():number {
    return this.comments?.length;
}
@Expose() get voteScore():number {
    return this.votes?.reduce((memo, curt)=> memo + (curt.value || 0), 0);
}
protected userVote : number;

setUserVote(user : User){
    const index = this.votes?.findIndex((v) => v.username === user.username);
    this.userVote = index> -1 ? this.votes[index].value : 0;}
@BeforeInsert()//저장되기전에 실행되는 코드
makeIdAndSlog(){
    this.identifier = makeId(7);
    this.slog = slugify (this.title);
}
}