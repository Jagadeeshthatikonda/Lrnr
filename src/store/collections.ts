import { action, makeObservable, observable, computed } from "mobx";

interface CollectionModelType {
  id: string;
  nodeType: string;
  collections: CollectionModelType[];
}

export class CollectionModel {
  id!: string;
  nodeType!: string;
  collections!: Array<CollectionModel>;
  collectionsList!: CollectionModelType[];

  constructor(id: string, nodeType: string) {
    makeObservable(this, {
      id: observable,
      nodeType: observable,
      collections: observable,
      collectionsList: observable,
      addSubCollections: action,
      setId: action,
      getAndCreateCollectionModel: action,
      getCollectionModel: computed,
    });
    this.id = id;
    this.nodeType = nodeType;
    this.collections = [];
    this.collectionsList = [];
  }

  addSubCollections(container: CollectionModel) {
    this.collections.push(container);
  }

  setId(id: string) {
    this.id = id;
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

  get getCollectionModel(): CollectionModel {
    return this.getAndCreateCollectionModel(
      this.collectionsList,
      new CollectionModel("DFIN", "CONTAINER_NODE_TYPE")
    );
  }
}
