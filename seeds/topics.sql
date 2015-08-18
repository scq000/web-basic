DROP DATABASE IF EXISTS TWWebBasic;

CREATE DATABASE TWWebBasic default charset utf8 COLLATE utf8_general_ci;

USE TWWebBasic;

CREATE TABLE  IF NOT EXISTS alternative(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    value varchar(10) ,
    description varchar(50) ,
    topic_name varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS topic(
  name VARCHAR(20) NOT NULL PRIMARY KEY,
  type VARCHAR(20) NOT NULL,
  question VARCHAR(50) NOT NULL,
  score INT NOT NULL,
  answer VARCHAR(50) NOT NULL
);


ALTER TABLE alternative ADD CONSTRAINT alternative_topic FOREIGN KEY alternative_topic (topic_name)
    REFERENCES topic (name)  ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO topic(name,type,question,score,answer) VALUES('fill_in_blank0','fill_in_blank','UML 的中文全称是：',5,'统一建模语言');
INSERT INTO topic(name,type,question,score,answer) VALUES('fill_in_blank1','fill_in_blank','对象最突出的特征是：',5, '封装性,继承性,多态性');
INSERT INTO topic(name,type,question,score,answer) VALUES('single_choice0','single_choice','UML与软件工程的关系是：',10, 'A');
INSERT INTO topic(name,type,question,score,answer) VALUES('single_choice1','single_choice','Java语言支持：',10, 'C');

INSERT INTO topic(name,type,question,score,answer) VALUES('multiple_choice0','multiple_choice','用例的粒度分为以下哪三种。',10, 'ABD');
INSERT INTO topic(name,type,question,score,answer) VALUES('multiple_choice1','multiple_choice','类图由以下哪三部分组成：',10, 'ABC');

INSERT INTO topic(name,type,question,score,answer) VALUES('true_false0','true_false','用例图只是用于和客户交流和沟通的，用于确定需求。',10, 'no');
INSERT INTO topic(name,type,question,score,answer) VALUES('true_false1','true_false','在状态图中,终止状态在一个状态图中允许有任意多个。',10, 'yes');

INSERT INTO topic(name,type,question,score,answer) VALUES('short_answer0','short_answer','简述什么是模型以及模型的表现形式?',20, '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。');

INSERT INTO alternative(value,description,topic_name) VALUES('','','fill_in_blank0');
INSERT INTO alternative(value,description,topic_name) VALUES('','','fill_in_blank1');
INSERT INTO alternative(value,description,topic_name) VALUES('','','fill_in_blank1');
INSERT INTO alternative(value,description,topic_name) VALUES('','','fill_in_blank1');
INSERT INTO alternative(value,description,topic_name) VALUES('A','UML 就是软件工程','single_choice0');
INSERT INTO alternative(value,description,topic_name) VALUES('B','UML 参与到软件工程中软件开发过程的几个阶段','single_choice0');
INSERT INTO alternative(value,description,topic_name) VALUES('C','UML 与软件工程无关','single_choice0');
INSERT INTO alternative(value,description,topic_name) VALUES('D','UML 是软件工程的一部分','single_choice0');

INSERT INTO alternative(value,description,topic_name) VALUES('A','单继承','single_choice1');
INSERT INTO alternative(value,description,topic_name) VALUES('B','多继承','single_choice1');
INSERT INTO alternative(value,description,topic_name) VALUES('C','单继承和多继承都支持','single_choice1');
INSERT INTO alternative(value,description,topic_name) VALUES('D','单继承和多继承都不支持','single_choice1');

INSERT INTO alternative(value,description,topic_name) VALUES('A','概述级','multiple_choice0');
INSERT INTO alternative(value,description,topic_name) VALUES('B','需求级','multiple_choice0');
INSERT INTO alternative(value,description,topic_name) VALUES('C','用户目标级','multiple_choice0');
INSERT INTO alternative(value,description,topic_name) VALUES('D','子功能级','multiple_choice0');

INSERT INTO alternative(value,description,topic_name) VALUES('A','名称(Name)','multiple_choice1');
INSERT INTO alternative(value,description,topic_name) VALUES('B','属性(Attribute)','multiple_choice1');
INSERT INTO alternative(value,description,topic_name) VALUES('C','操作(Operation)','multiple_choice1');
INSERT INTO alternative(value,description,topic_name) VALUES('D','方法（Function）','multiple_choice1');

INSERT INTO alternative(value,description,topic_name) VALUES('yes','对','true_false0');
INSERT INTO alternative(value,description,topic_name) VALUES('no','错','true_false0');

INSERT INTO alternative(value,description,topic_name) VALUES('yes','对','true_false1');
INSERT INTO alternative(value,description,topic_name) VALUES('no','错','true_false1');

INSERT INTO alternative(value,description,topic_name) VALUES('','','short_answer0');
