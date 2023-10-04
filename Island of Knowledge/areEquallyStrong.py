def solution(yourLeft, yourRight, friendsLeft, friendsRight):
    # get the strongest from your
    yourStrongest = max(yourLeft, yourRight)
    # get the strongest from friends
    friendsStrongest = max(friendsLeft, friendsRight)

    # get the weakest from your
    yourWeakest = min(yourLeft, yourRight)
    # get the weakest from friends
    friendsWeakest = min(friendsLeft, friendsRight)
 
    # check if both arms are equally strong and return the boolean
    return yourStrongest == friendsStrongest and yourWeakest == friendsWeakest