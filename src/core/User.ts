export interface Percentage {
	redPorcentage: number
	orangePorcentage: number
	yellowPorcentage: number
}

export interface UserProps {
	name: string
	email: string
	state?: string
	city?: string
	phone?: string
	percentages?: Percentage
}

export class User {
	private _props: UserProps

	constructor(props: UserProps) { this._props = props }

	get name() { return this._props.name }
	get email() { return this._props.email }
	get state() { return this._props.state }
	get city() { return this._props.state }
	get phone() { return this._props.phone }
	get percentages() { return this._props.percentages }

	clone(props: UserProps) {
		return new User({
			...this._props,
			...props
		})
	}
}
