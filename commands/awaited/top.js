module.exports = {
type: "awaitedCommand",
name: "top",
code: `$deletecommand
$title[Top Playing Song]
$description[$globalUserLeaderboard[userused;asc;\`) {top} {username} - {value}\`]]
$color[$getVar[color]]
$addTimestamp`
}
