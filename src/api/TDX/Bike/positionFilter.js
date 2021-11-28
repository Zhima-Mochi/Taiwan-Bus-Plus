export function positonFilter(position1, position2, radius = 500) {
    return positionDistance(position1, position2) <= radius;
}

export function positionDistance(position1, position2) {
    return Math.pow(Math.pow((position1[0] - position2[0]) * 100722,2) + Math.pow((position1[1] - position2[1]) * 111200,2), 0.5);
}