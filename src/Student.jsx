function Student(props){
    return(
        <div classname="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    )
}

export default Student