import React, { useRef, useState } from 'react';

const Home = () => {
    const data = useRef();
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    // const [pswd, setPswd] = useState("")
    const handle = () => {
        localStorage.setItem("title", title)
        localStorage.setItem("url", url)
        // localStorage.setItem("password",pswd)
    }


    function add() {
        var new_chq_no = parseInt($('#total_chq').val()) + 1;
        var new_input = "<input type='text' id='new_" + new_chq_no + "'>";
        ('#new_chq').html(new_input);
    }

    const handleClick = (event) => {
        console.log(data.current.value, "value");
        localStorage.setItem('inputValue', data.current.value);
        event.preventDefault()
    }
    console.log(localStorage.getItem("inputValue"), "****");
    return (
        <div>
            <div className="catgory-modal">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Add Category
                </button>
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label>Category</label>
                                        <input ref={data} type="text" name="" id="" />
                                    </div>
                                    <button onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            {/* <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bookmark-modal">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label>Bookamrk</label>
                                        <input onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" placeholder='Title' />
                                        <input onChange={(e) => setUrl(e.target.value)} type="text" name="" id="" placeholder='URL' />
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown button
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button onClick={handleClick} type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;