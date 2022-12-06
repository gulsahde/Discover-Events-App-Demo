import Card from '../ui/Card'
import classes from './NewEventForm.module.css'
import {useRef} from 'react'

function NewEventForm(props){
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const locationInputRef=useRef();
    const descriptionInputRef=useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle=titleInputRef.current.value;
        const enteredImage=imageInputRef.current.value;
        const enteredLocation=locationInputRef.current.value;
        const enteredDescription=descriptionInputRef.current.value;

        const eventData={
            title: enteredTitle,
            image: enteredImage,
            location: enteredLocation,
            description: enteredDescription,
        };

        props.onAddEvent(eventData);
    }
    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                {/* title */}
                <div className={classes.control}>
                    <label htmlFor="title">Event Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                {/* image */}
                <div className={classes.control}>
                    <label htmlFor="image">Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/> 
                </div>
                {/* location */}
                <div className={classes.control}>
                    <label htmlFor="location">Location</label>
                    <input type="text" required id="location" ref={locationInputRef}/> 
                </div>
                {/* description */}
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea 
                    id="description" 
                    required 
                    row="5" 
                    ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Event</button>
                </div>
            </form>
        </Card>
    )
}

export default NewEventForm;