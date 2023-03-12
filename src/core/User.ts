export interface UserProps {
	name: string
	email: string
	phone?: number
}

export class User {
	private _props: UserProps

	constructor(props: UserProps) { this._props = props }

	get name() { return this._props.name }
	get email() { return this._props.email }
	get phone() { return this._props.phone }

	clone(props: UserProps) {
		return new User({
			...this._props,
			...props
		})
	}
}
