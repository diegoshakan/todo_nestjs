import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    done: boolean;

    @Column()
    userId: number;

    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn()
    user: User
}
