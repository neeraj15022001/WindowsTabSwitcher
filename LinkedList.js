function LinkedListArrow() {
  function Node(content) {
    this.content = content;
    this.next = this;
  }

  this.head = null;
  this.tail = null;

  this.add = (content) => {
    if (!this.head) {
      this.head = new Node(content);
      this.tail = this.head;
      this.tail.next = null;
    } else {
      this.tail.next = new Node(content);
      this.tail = this.tail.next;
      this.tail.next = null;
    }
  };

  this.moveToFront = (node) => {
    if (node === this.head) {
      return;
    }
    let temp = this.head;
    while (temp.next !== node) {
      temp = temp.next;
    }
    console.log(temp);
    temp.next = temp.next.next;
    node.next = this.head;
    this.head = node;
  };
}
