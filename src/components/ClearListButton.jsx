import Swal from "sweetalert2";

const ClearListButton = ({setListItems}) => {
    const clearList = async () => {
        const {isConfirmed} = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
    
        if(isConfirmed){
            localStorage.setItem("listItems", JSON.stringify([]));
            setListItems([]);
        }
    }

    return (
        <button 
            className="btn btn-outline-danger me-1"
            type="button"
            onClick={clearList}
        >
            <i className="bi bi-trash2"></i>
        </button>
    )
}

export default ClearListButton;