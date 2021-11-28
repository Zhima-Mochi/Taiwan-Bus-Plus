export default function geometryTransform(geometryStr){
    const pattern= /MULTILINESTRING \(\((.*)\)\)/;
    const positionStr=geometryStr.match(pattern)[1];
    return positionStr.split(',').map(item=>item.split(' ')).map(item=>[+item[0],+item[1]]);
}