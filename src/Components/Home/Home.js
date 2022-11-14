import React, { useState } from 'react';

const Home = () => {
    const [title, setTitle] = useState([]);
    const [url, setUrl] = useState([]);
    const [category, setCategory] = useState([]);
    const handle = (event) => {
        // let oldData = JSON.parse(localStorage.getItem('items'))
        localStorage.setItem("title", title);
        localStorage.setItem("url", url);
        localStorage.setItem("category", category);
        event.preventDefault()

    }
    const handleClick = (event) => {
        // console.log(data.current.value, "value");
        // localStorage.setItem('inputValue', data.current.value);
        localStorage.setItem("category", category)
        event.preventDefault()
    }
    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'space-evenly', 'alignItems': 'center' }}>
            <div className="catgory-modal mt-5">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Add Category
                </button>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">category</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label>Category</label>
                                        <input onChange={(e) => setCategory(e.target.value)} type="text" name="" id="" />
                                    </div>
                                    <button onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bookmark-modal mt-5">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Bookmark
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">bookmark</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label>Bookamrk</label>
                                        <input onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" placeholder='Title' />
                                        <input onChange={(e) => setUrl(e.target.value)} type="text" name="" id="" placeholder='URL' />
                                        <label for="cars">Choose a category :</label>
                                        <select name="cars" id="cars">
                                            <option onChange={(e) => setCategory(e.target.value)}>{localStorage.getItem("category")}</option>
                                        </select>
                                    </div>
                                    <button onClick={handle} type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;