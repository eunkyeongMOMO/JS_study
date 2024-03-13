import { Expose } from "class-transformer";
import { text } from "stream/consumers";
import BaseEntity from "./Entity"
import Post from "./Post"
import User from "./User"
import { Entity, Column, Index, OneToMany, ManyToOne, JoinColumn } from "typeorm"

Entity('subs')
export default class Sub extends BaseEntity {
@Index()
@Column({unique: true})
name: string;

@Column()
title:string;

@Column({type:"text", nullable:true})
description: string;

@Column({ nullable:true })
imageUrn : string;

@Column({nullable:true})
bannerUrn : string;

@Column()
username:string;

@ManyToOne( () => User)
@JoinColumn({ name:"username", referencedColumnName: "username" })
//ManyToOne일때는 선택사항/ OneToOne일때는 필수 사항 
//name 외래키 속성명. name이 없을경우 propetyName +referencedColumnName 이 기본 키
//referencedColumnName 참조 엔터티의 참조 속성명, id가 기본값
user: User;

@OneToMany(()=> Post, (post) => post.sub)
posts: Post[];

@Expose()
get imageUrn() : string{
    return this.imageUrn
    ? `${process.env.APP_URL}/images/${this.imageUrn}`
    : "https://www.gravatar.com/avatar?d=mp&f=y";
    //데이터가 없을경우 보여지는 기본 이미지
}
@Expose()
get bannerUrn() : string{
    return this.bannerUrn
    ? `${process.env.APP_URL}/images/${this.bannerUrn}`
    : undefined;
}

}