const Queue = () => {
    const arr = [];

    const enqueue = (element) => arr.push(element);
    
    const dequeue = () => arr.shift();

    const isEmpty = () => arr.length < 1;

    return {
        enqueue,
        dequeue,
        isEmpty
    }
}

const g = [
    [1, 2],
    [ 3],
    [ 4],
    [],
    []
]

const n = g.length

const  solve = (s) =>{
    const q = Queue();
    q.enqueue(s);

    const visited = Array(n).fill(false);

    visited[s] = true;

    const prev = Array(n).fill(null);

    while (!q.isEmpty()){
        let node = q.dequeue();
        let neighbourds = g[node];
        
        neighbourds.forEach(next => {
            if(!visited[next]){ 
                q.enqueue(next);
                visited[next] = true;
                prev[next] = node;
            }
        });
    }
    return prev;
}

const reconstructPath = (s, e, prev) => {
    const path = [];

    for (let at = e; prev[at] !== null; at = prev[at]){
        path.push(prev[at])
        
    }
    path.reverse();

    if(path[0] == s){
        return path
    }
    return [];

}


const bfs =(s, e) =>{
    const prev = solve(s)
    return reconstructPath(s,e, prev)
}


console.log(bfs(0, 3))