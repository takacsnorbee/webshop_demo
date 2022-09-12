export class ResponseUser{
    constructor(user) {
        const { name, email, isAdmin, avatarId} = user
        this.username = name,
        this.email = email,
        this.isAdmin = isAdmin,
        this.avatarId = avatarId
    }
}