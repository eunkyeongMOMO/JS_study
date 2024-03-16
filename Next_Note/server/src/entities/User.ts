import { Exclude } from "class-transformer";
import { IsEmail, Length } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany, BeforeInsert } from "typeorm"
import bcrypt from "bcryptjs";
import BaseEntity from "./Entity";
import Post from "./Post";
import Vote from "./Vote";

@Entity('users') 
// User 클래스가 entityd임을 나타내는데 사용합니다.
export default class User extends BaseEntity {
@Index()
//데이터 베이스의 인덱스를 생성, 엔터티속성, 엔터티에 사용. 테이블 쿼리 속도를 높임. 데이터양이 많고 검색이 많을때 사용하면 좋음
@IsEmail(undefined, {message:"이메일 주소가 잘못되었습니다."})
@Length(1,255,{message: "이메일 주소는 비워둘 수 없습니다."})
@Column({unique:true})
//엔터티의 다른열로 구분하는데 사용
email:string;

@Index()
@Length(3, 32, {message:"사용자 이름은 3글자 이상이어야 합니다."})
@Column({unique:true})
username:string;

@Exclude()
@Column()
@Length(6,255,{message:"비밀번호는 6자리 이상이엉햐합니다."})
password:string;

@OneToMany(()=> Post, (post) => post.user)
posts: Post[];

@OneToMany(()=> Vote, (vote) => vote.user)
votes: Vote[];

@BeforeInsert() //비밀번호 저장할때 사용
async hashPassword(){
    this.password = await bcrypt.hash(this.password, 6);
}

}
