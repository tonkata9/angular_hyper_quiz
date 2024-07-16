export interface Identifiable<K> {
  id: K;
}
export interface IdGenerator<K> {
  getNextId(): K;
}
