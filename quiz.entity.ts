@Entity('quiz')

//this is an exemple of how it could be implemented

export class Quiz extends BaseEntity {

@PrimaryGeneratedColumn({
	comment: 'The quiz unique Id',
})

id: number;

@Column({
 
type: 'varchar',

})

title: string;

@Column({

type: 'text',

})

points: number;

@Column({

type: number;

})