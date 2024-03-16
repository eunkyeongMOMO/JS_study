import { Exclude, Expose } from "class-transformer";
import { Entity, Column,  ManyToOne, JoinColumn, BeforeInsert, OneToMany, Index } from "typeorm"
import User from "./User";
import Post from "./Post";
import BaseEntity from "./Entity";
import Vote from "./Vote";
import { makeId } from "../utils/helpers";
@Entity("comments")
export default class Comment extends BaseEntity {
    @Index()
    @Column()
    identifier:string;

    @Column()
    body:string;
    
    @Column()
    username:string;
    
    @ManyToOne( () => User, (user) => user.posts)
    @JoinColumn({ name:"username", referencedColumnName: "username" })
    user: User;
    @Column()
    postId:number;
    

    @ManyToOne(()=> Post, (post) => post.comments)
    post:Post;
    
    @Exclude()
    @OneToMany(()=> Vote, (vote) => vote.post)
    votes:Vote[];
    @Expose() get voteScore():number {
        return this.votes?.reduce((memo, curt)=> memo + (curt.value || 0), 0);
    }
    protected userVote:number;
    
    setUserVote(user : User){
        const index = this.votes?.findIndex((v) => v.username === user.username);
        this.userVote = index> -1 ? this.votes[index].value : 0;}

    
    @BeforeInsert()//저장되기전에 실행되는 코드
    makeId(){
        this.identifier = makeId(8);
    }
}