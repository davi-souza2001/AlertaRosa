export interface UserProps {
	name: string
	email: string
}

export class User {
	private _props: UserProps

	constructor(props: UserProps) { this._props = props }

	get name() { return this._props.name }
	get email() { return this._props.email }

	clone(props: UserProps) {
		return new User({
			...this._props,
			...props
		})
	}
}
