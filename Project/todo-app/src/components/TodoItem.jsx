function TodoItem() {
  return (
    <div class="item-container">
      <div class="row">
        <div class="col-6">Do coding</div>
        <div class="col-4">5/3/2026</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6">Dinner time</div>
        <div class="col-4">5/3/2026</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger item-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
