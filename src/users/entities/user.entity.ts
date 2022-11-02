import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'usuario'})
export class User {
    @PrimaryGeneratedColumn()
    idUsuario: number;

    @Column({length: 200})
    nombre_usuario: string;

    @Column({length:20})
    constraseña: string;

    @Column({length: 200})
    tipo_usuario: string;
}
