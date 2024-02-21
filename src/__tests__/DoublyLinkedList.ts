import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "../ts_mocks/ListTest";

test("DoublyLinkedList", function () {
    const list = new LinkedList<number>();
    test_list(list);
});
