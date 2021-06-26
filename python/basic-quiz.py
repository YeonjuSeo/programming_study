#Quiz 1
# station = "사당"
# print(station,"행 열차가 들어오고 있습니다.")
# station = "신도림"
# print(station,"행 열차가 들어오고 있습니다.")
# station = "인천공항"
# print(station,"행 열차가 들어오고 있습니다.")

# Quiz 2
# from random import *
# print("오프라인 스터디 모임 날짜는 매월",randint(4,28),"일로 선정되었습니다.")

# Quiz 3
# my solution
# adrs = "http://naver.com"
# adrs = adrs[7:]
# adrs = adrs[:5]
# password = adrs[:3]+str(len(adrs))+str(adrs.count("e"))+"!"
# print(password)

# solution in lecture
# url = "http://naver.com"
# my_str=url.replace("http://","")
# my_str=my_str[:my_str.index(".")]
# password = my_str[:3]+str(len(my_str))+str(my_str.count("e"))+"!"
# print("{0}의 비밀번호는 {1} 입니다." .format(url,password))

# Quiz 4
# #my solution
# from random import *
# list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
# chicken=randint(1,20)
# list.remove(chicken)
# shuffle(list)

# print(" -- 당첨자 발표 --")
# print("치킨 당첨자 :",chicken)
# print("커피 당첨자 :",sample(list,3))
# print(" -- 축하합니다 --")

#solution in lecture
# from random import *
# users = range(1,21) #1부터 20까지 숫자 생성
# users = list(users)
# shuffle(users)

# winners = sample(users,4)
# print(" -- 당첨자 발표 --")
# print("치킨 당첨자 : {0}".format(winners[0]))
# print("커피 당첨자 : {0}".format(winners[1:]))
# print(" -- 축하합니다 --")

# Quiz 5
# my solution
# from random import *
# cnt=0
# for i in range(1,51):
#     num=randint(5,50)
#     print("{0} {1}".format(i, num))
#     if(num>=5 and num<=15): #혹은 if 5<=num<=15 로도 표현 가능
#         print("[O] {0}번째 손님 (소요시간 : {1})".format(i,num))
#         cnt+=1
#     else:
#         print("[ ] {0}번째 손님 (소요시간 : {1})".format(i,num))
# print("총 탑승 승객 : {0} 분".format(cnt))

# Quiz 6
# my solution
# def std_weight(height,gender):
#     if(gender == "남자"):
#         std_w = round(height*height*22/10000,2)
#     else:
#         std_w = round(height*height*21/10000,2)
#     print("키 {0}cm {1}의 표준 체중은 {2}kg 입니다." .format(height,gender,std_w))    

# std_weight(175,"남자")

# solution in lecture
# def std_weight(height,gender): # 키 m 단위 (실수), 성별 "남자"/"여자"
#     if(gender=="남자"):
#         return height*height*22
#     else:
#         return height*height*21

# height = 175 # cm 단위
# gender = "남자"
# weight = round(std_weight(height / 100,gender),2)
# print("키 {0}cm {1}의 표준 체중은 {2}kg 입니다." .format(height,gender,weight))   

# Quiz 7 
# my solution__not solved
# for i in range (1,51):
#     with open("{0}주차.txt","w",encoding="utf8" .format(i)) as report_file:
#         report_file.write("- {0} 주차 주간보고 -\n" .format(i))
#         report_file.write("부서 :\n")
#         report_file.write("이름 :\n")
#         report_file.write("업무 요약 :")

# # solution in lecture
# for i in range(1,51):
#     with open(str(i)+"주차.txt","w",encoding="utf8") as report_file:
#         report_file.write("- {0} 주차 주간보고 -" .format(i))
#         report_file.write("\n부서 :")
#         report_file.write("\n이름 :")
#         report_file.write("\n업무 요약 :")

# Quiz 8
# # my solution
# class House:
#     def __init__(self, location, house_type, deal_type, price, completion_year):
#         self.location=location
#         self.house_type=house_type
#         self.deal_type=deal_type
#         self.price=price
#         self.completion_year=completion_year

#     def show_detail(self):
#         print(self.location, self.house_type, self.deal_type, self.price, self.completion_year)

# h1=House("강남","아파트","매매","10억","2010년")
# h2=House("마포","오피스텔","전세","5억","2007년")
# h3=House("송파","빌라","월세","500/50","2000년")

# print("총 3대의 매물이 있습니다.")
# h1.show_detail()
# h2.show_detail()
# h3.show_detail()

# solution in lecture
# class House:
#     def __init__(self, location, house_type, deal_type, price, completion_year):
#         self.location=location
#         self.house_type=house_type
#         self.deal_type=deal_type
#         self.price=price
#         self.completion_year=completion_year

#     def show_detail(self):
#         print(self.location, self.house_type, self.deal_type, self.price, self.completion_year)

# houses=[]
# house1=House("강남","아파트","매매","10억","2010년")
# house2=House("마포","오피스텔","전세","5억","2007년")
# house3=House("송파","빌라","월세","500/50","2000년")

# houses.append(house1)
# houses.append(house2)
# houses.append(house3)

# print("총 {0}대의 매물이 있습니다.".format(len(houses)))
# for house in houses:
#     house.show_detail()

# Quiz 9
# # my solution__not solved
# chicken = 10
# waiting =1
# flag=1

# class SoldOutError(Exception):
#     def __init__(self,msg):
#         self.msg=msg

#     def __str__(self):
#         return self.msg

# try:
#     while(flag==1):
#         print("[남은 치킨: {0}]" .format(chicken))
#         order=int(input("치킨을 몇마리 주문하시겠습니까?"))
#         if(order<1):
#             raise ValueError
#         if(order>chicken):
#             raise SoldOutError("재고가 소진되어 더 이상 주문을 받지 않습니다.")
#             flag=0
#         else:
#             print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다." .format(waiting,order))
#             waiting+=1
#             chicken-=order
# except ValueError:
#     print("잘못된 값을 입력하였습니다.")
# except SoldOutError:
#     print("")

# solution in lecture
# class SoldOutError(Exception):
#     pass

# chicken = 10
# waiting = 1

# while(True):
#     try:
#         print("[남은 치킨: {0}]" .format(chicken))
#         order=int(input("치킨을 몇마리 주문하시겠습니까?"))
#         if(order>chicken):
#             raise SoldOutError("재고가 소진되어 더 이상 주문을 받지 않습니다.")
#         elif order <=0:
#             raise ValueError
#         else:
#             print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다." .format(waiting,order))
#             waiting+=1
#             chicken-=order

#         if(chicken==0):
#             raise SoldOutError
#     except ValueError:
#         print("잘못된 값을 입력하였습니다.")
#     except SoldOutError:
#         print("재고가 소진되어 더 이상 주문을 받지 않습니다.")
#         break

# Quiz 10
# my solution
import byme
byme.sign("YeonjuSeo")
