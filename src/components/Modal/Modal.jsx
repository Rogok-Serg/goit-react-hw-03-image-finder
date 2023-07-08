export const Modal = ({ largeImageURL, tags }) => {
  return (
    <div class="overlay">
      <div class="modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
