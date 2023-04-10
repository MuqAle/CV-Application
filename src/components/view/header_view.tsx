interface HeaderViewProps{
    firstName:string,
    lastName:string,
    location:string,
    email:string,
    number:string,
}

const HeaderView = ({firstName,lastName,location,email,number}:HeaderViewProps) => {
    return(
        <div>
            <h1>{firstName} {lastName}</h1>
            <p>{location} | {email} | {number}</p>
        </div>
    )
}

export default HeaderView