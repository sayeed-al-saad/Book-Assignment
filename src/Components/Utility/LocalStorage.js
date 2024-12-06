const getStoredBookApplication = () =>{
    const storedBookApplication = localStorage.getItem('book-applications');
    if(storedBookApplication){
        return JSON.parse(storedBookApplication);
    }
    return [];
}


const saveBookApplication = id =>{
    const storedBookApplications = getStoredBookApplication();
    const exists = storedBookApplications.find(bookId => bookId === bookId);
    if(!exists){
        storedBookApplications.push(id);
        localStorage.setItem('book-applications', JSON.stringify(storedBookApplications))
    }
}

export { getStoredBookApplication, saveBookApplication}