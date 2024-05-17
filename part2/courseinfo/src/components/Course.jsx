/* eslint-disable react/prop-types */
const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => 
                <Part key={part.id} part={part} />
            )}
        </div>
    )
}

const Total = ({ parts }) => {
    return (
        <p>
            Number of exercises {parts.reduce(
                (acc, curVal) => acc + curVal.exercises, 0
            )}
        </p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            {course.map(course => (
                <div key={course.id}>
                    <Header course={course} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            ))}
        </div>
    )
}

export default Course