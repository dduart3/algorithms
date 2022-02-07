//queue data structure factory function
const Queue = () => {
  const arr = [];

  const enqueue = (element) => arr.push(element);

  const dequeue = () => arr.shift();

  const isEmpty = () => arr.length < 1;

  return {
    enqueue,
    dequeue,
    isEmpty,
  };
};

//dummy adjacent list
const adjacentList = [[1, 2], [3], [4], [], []];

const adjacentListSize = adjacentList.length;

const solve = (s) => {
  const queue = Queue();
  queue.enqueue(s);

  const visited = Array(adjacentListSize).fill(false);

  visited[s] = true;

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

const reconstructPath = (s, e, prev) => {
  const path = [];

  for (let at = e; prev[at] !== null; at = prev[at]) {
    path.push(prev[at]);
  }
  path.reverse();

  if (path[0] == s) {
    return path;
  }
  return [];
};

const breadthFirstSearch = (s, e) => {
  const prev = solve(s);
  return reconstructPath(s, e, prev);
};

console.log(breadthFirstSearch(0, 4));
