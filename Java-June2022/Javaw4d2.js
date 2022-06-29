enqueue(item) {
    const newNode = new QueueNode(item);
    if (this.tail) this.tail.next = newNode;
    if (!this.head) this.head = newNode;

    this.tail = newNode;

    return ++this.size;
  }

  dequeue() {
    const firstNode = this.head;
    if (this.head) {
      if (this.head.next) this.head = this.head.next;
      else this.head = null;
      this.size--;
    }

    return firstNode ? firstNode.data : undefined;
  }

  front() {
    return this.head ? this.head.data : undefined;
  }

  isEmpty() {
    return this.head == null;
  }

  size() {
    return this.size;
  }