import './courseview.css'

function fetchCourses()
{
    return [{'p': "This is a test", 'a':"of my course previewer"},{'p': "This is a test", 'a':"of my course previewer"},{'p': "This is a test", 'a':"of my course previewer"},{'p': "This is a test", 'a':"of my course previewer"},{'p': "This is a test", 'a':"of my course previewer"},{'p': "This is a test", 'a':"of my course previewer"},{'p': "This is a test", 'a':"of my course previewer"},{'p': "This is a test", 'a':"of my course previewer"},];
}

function CourseView()
{
    const listItems = fetchCourses().map(i => <div className='listItem'><div className='listItemTop'><div className='courseTitle'><b>{i.p.toUpperCase()}</b> {i.a}</div><div className='addButton'><i className='material-icons' style={{fontSize:'medium', marginTop:'4px'}}>add</i></div></div></div>);
    return(
        <div className="courseView">
            <input name='Filter'/>
            <div className='Classselect'>
                <li>{listItems}</li>
            </div>
        </div>
    )
}

export default CourseView