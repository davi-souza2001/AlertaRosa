export interface UserProps {
	name: string
	email: string
	photo: string
	xp: number
}

// não confundir o que o usuário vai ter com caracteristicas

export class User {
	private _props: UserProps

	constructor(props: UserProps) { this._props = props }

	get name() { return this._props.name }
	get email() { return this._props.email }
	get photo() { return this._props.photo }
	get xp() { return this._props.xp }

	clone(props: UserProps) {
		return new User({
			...this._props,
			...props
		})
	}
}


// portas e adaptadores

// portas - entidade - usuário
// adaptadores - usuário ser compativel com firebase

//core - logica da aplicação (portas)

// questão
// sala
