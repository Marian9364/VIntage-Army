import styles from "./ItemDetailsPage.module.css";
import "../../reset.css"
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as itemsService from "../../services/itemsService";
import * as commentService from "../../services/commentService";
import { useItemContext } from "../../contexts/ItemContext";
import { useAuthContext } from "../../contexts/AuthContext";


export const ItemDetailsPage = () => {
  const { itemId } = useParams();
  const { user } = useAuthContext();


  // const { commentId } = useParams();
  const navigate = useNavigate();
  const { addComment, fetchItemDetails, selectItem, removeItem } = useItemContext();
  const currentItem = selectItem(itemId);

  useEffect(() => {
    (async () => {
      const itemDetails = await itemsService.getOne(itemId);
      const itemComments = await commentService.getByItemId(itemId);

      console.log(user._id == itemDetails._ownerId);

      fetchItemDetails(itemId, {
        ...itemDetails,
        comments: itemComments.map(x => `${x.user.email}: ${x.text}`),
      });
    })();
  }, []);

  const addCommentHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const comment = formData.get("comment");
    if(comment === ""){
      alert("Comment can not be empty!");
      return
    }
    

    commentService.create(itemId, comment).then(result => {
      addComment(itemId, comment);
    });
    e.target.reset()

  };

  // const deleteCommentHandler = (e) => {
  //   e.preventDefault();
  //   commentService.remove(commentId);

  // }

  const deleteItemHandler = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete the item?"
    );

    if (confirmation) {
      itemsService.remove(itemId).then(() => {
        removeItem(itemId);
        navigate("/items");
      });
    }
  };


  return (
    <div className={styles.mainWrapper}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>Item Details</h1>
        <h1>Item Type: {currentItem.type}</h1>
        <img className={styles.img} src={currentItem.img} />
        <h4>Size: {currentItem.size}</h4>
        <h4>Gender: {currentItem.gender}</h4>
        <h4>price: {currentItem.price}</h4>
        <h2>Created by: {currentItem.creator}</h2>
        <h2>Creator's phone number: {currentItem.phone}</h2>

          {user.email?
                  <div className={styles.btns}>
                  <Link to={`/items/${itemId}/edit`} className={styles.editBtn}>
                    Edit
                  </Link>
          <button onClick={deleteItemHandler} className={styles.delBtn}>
          Delete
        </button>
        </div>
           : 
        <span></span>
          }
          
        <div className={styles.commentsWrapper}>
          <h2 className={styles.commentsText}>Comments:</h2>
          <ul role="list">
            {currentItem.comments?.map((x) => (
              <li key={x} className={styles.comment}>
                <p>{x}</p>
                {/* <button onClick={deleteCommentHandler}>x</button> */}
              </li>
            ))}
          </ul>

          {!currentItem.comments && <p>No comments.</p>}
        </div>
        <div className={styles.createComment}>
          <label>Add new comment:</label>
          <div className={styles.commentFieldAndBtn}>
          <form className={styles.form} onSubmit={addCommentHandler}>
            <textarea name="comment" placeholder="Comment......" />

            <input
              className={styles.btnSubmit}
              type="submit"
              value="Add Comment"
            />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};
