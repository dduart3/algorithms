//queue data structure factory function
const Queue = () => {
  const _arr = [];

  const enqueue = (element) => _arr.push(element);

  const dequeue = () => _arr.shift();

  const isEmpty = () => _arr.length < 1;

  return {
    enqueue,
    dequeue,
    isEmpty,
  };
};

//dummy adjacent list
const adjacentList = [[1, 2], [3], [4], [], []];

const adjacentListSize = adjacentList.length;

const solve = (start) => {
  const queue = Queue();
  queue.enqueue(start);

  const visited = Array(adjacentListSize).fill(false);

  visited[start] = true;

  const prev = Array(adjacentListSize).fill(null);

  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    let neighbourds = adjacentList[node];

    neighbourds.forEach((next) => {
      if (!visited[next]) {
        queue.enqueue(next);
        visited[next] = true;
        prev[next] = node;
      }
    });
  }
  return prev;
};

const reconstructPath = (start, end, prev) => {
  const path = [];

  for (let at = end; prev[at] !== null; at = prev[at]) {
    path.push(prev[at]);
  }
  path.reverse();

  if (path[0] == start) {
    return path;
  }
  return [];
};

const breadthFirstSearch = (start, end) => {
  const prev = solve(start);
  return reconstructPath(start, end, prev);
};

console.log(breadthFirstSearch(0, 4));
