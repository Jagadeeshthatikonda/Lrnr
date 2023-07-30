import { action, makeObservable, observable } from "mobx";

interface CollectionModelType {
  id: string;
  nodeType: string;
  collections: CollectionModelType[];
}

export class CollectionModel {
  id!: string;
  nodeType!: string;
  collections!: Array<CollectionModel>;

  constructor(id: string, nodeType: string) {
    makeObservable(this, {
      id: observable,
      nodeType: observable,
      collections: observable,
      getAndCreateCollectionModel: action,
    });
    this.id = id;
    this.nodeType = nodeType;
    this.collections = [];
  }

  getAndCreateCollectionModel(
    response: CollectionModelType[],
    collectionModel: CollectionModel
  ): CollectionModel {
    response.forEach(node => {
      const newCollectionModel = new CollectionModel(node.id, node.nodeType);
      collectionModel.collections.push(newCollectionModel);

      if (node.collections.length > 0) {
        this.getAndCreateCollectionModel(node.collections, newCollectionModel);
      }
    });
    return collectionModel;
  }
}
