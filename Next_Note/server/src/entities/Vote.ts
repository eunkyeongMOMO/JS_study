import { Exclude } from "class-transformer";
import { IsEmail, Length } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import User from "./User";
import Post from "./Post";
import BaseEntity from "./Entity"

@Entity("votes")
export default class Vote extends BaseEntity {
@Column()
value : number;

@ManyToOne( () => User, (user) => user.posts)
@JoinColumn({ name:"username", referencedColumnName: "username" })
user: User;

@Column()
username:string;

@Column({nullable:true})
postId:number;

@ManyToOne(()=>Post)
post:Post;

@Column({nullable:true})
commentId:number;

@ManyToOne(()=>Comment)
comment:Comment;

}