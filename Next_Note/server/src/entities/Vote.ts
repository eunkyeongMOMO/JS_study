import { Exclude } from "class-transformer";
import { IsEmail, Length } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index, OneToMany, BeforeInsert } from "typeorm"

export default class Vote extends BaseEntity {

}