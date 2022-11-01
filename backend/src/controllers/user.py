# Copyright (c) 2022 Nikhil Akki
#
# This software is released under the MIT License.
# https://opensource.org/licenses/MIT

from fastapi import APIRouter
from src.services import user, UserDto

router = APIRouter()


@router.get("/user/all", status_code=202)
async def getUsers():
    return await user.getUsers()


@router.get("/user/{id}", status_code=202)
async def getUser(
    id: int,
):
    return await user.getUser(id)


@router.post("/user", status_code=201)
async def createUser(
    userDto: UserDto,
):
    return await user.createUser(userDto)


@router.patch("/user/{id}", status_code=200)
async def updateUser(
    userDto: UserDto,
    id: int,
):
    return await user.updateUser(userDto, id)


@router.delete("/user/{id}")
async def deleteUser(
    id: int,
):
    return await user.deleteUser(id)
