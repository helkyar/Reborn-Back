/**
 * Representation of table Posts in the future
 * will be used between the manager and controller
 * as package of the table data.
 */
class Post {
  /**
   * Response from the database is decontructed
   * in the model variables
   * @param {*} param0
   */
  constructor({
    id,
    email,
    title,
    description,
    toRepair,
    videos,
    imgs,
    categories,
    materials,
    tags,
  }) {
    this.#id = id;
    this.#email = email;
    this.#title = title;
    this.#description = description;
    this.#toRepair = toRepair;
    this.#videos = videos;
    this.#imgs = imgs;
    this.#categories = categories;
    this.#materials = materials;
    this.#tags = tags;
  }

  #id;
  #email;
  #title;
  #description;
  #toRepair;
  #videos;
  #imgs;
  #categories;
  #materials;
  #tags;
}
