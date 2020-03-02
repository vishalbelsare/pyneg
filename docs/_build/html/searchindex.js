Search.setIndex({docnames:["API/pyneg","API/pyneg.agent","API/pyneg.comms","API/pyneg.engine","API/pyneg.types","API/pyneg.utils","examples/index","index","theory/index","usage/agent-setup","usage/index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["API/pyneg.rst","API/pyneg.agent.rst","API/pyneg.comms.rst","API/pyneg.engine.rst","API/pyneg.types.rst","API/pyneg.utils.rst","examples/index.rst","index.rst","theory/index.rst","usage/agent-setup.rst","usage/index.rst"],objects:{"pyneg.agent":{agent:[1,0,0,"-"],agent_factory:[1,0,0,"-"],constr_agent:[1,0,0,"-"]},"pyneg.agent.agent":{Agent:[1,1,1,""]},"pyneg.agent.agent.Agent":{__init__:[1,2,1,""],_accepts_negotiation_proposal:[1,2,1,""],_call_for_negotiation:[1,2,1,""],_parse_response:[1,2,1,""],_record_message:[1,2,1,""],_should_exit:[1,2,1,""],_terminate:[1,2,1,""],_wait_for_response:[1,2,1,""],accepts:[1,2,1,""],add_utilities:[1,2,1,""],generate_next_message:[1,2,1,""],name:[1,3,1,""],negotiate:[1,2,1,""],receive_message:[1,2,1,""],receive_negotiation_request:[1,2,1,""],send_message:[1,2,1,""],set_utilities:[1,2,1,""]},"pyneg.agent.agent_factory":{AgentFactory:[1,1,1,""]},"pyneg.agent.agent_factory.AgentFactory":{estimate_max_linear_utility:[1,2,1,""],make_constrained_linear_concession_agent:[1,2,1,""],make_constrained_linear_random_agent:[1,2,1,""],make_linear_concession_agent:[1,2,1,""],make_linear_random_agent:[1,2,1,""],make_random_agent:[1,2,1,""]},"pyneg.agent.constr_agent":{ConstrainedAgent:[1,1,1,""]},"pyneg.agent.constr_agent.ConstrainedAgent":{__init__:[1,2,1,""],_accepts_negotiation_proposal:[1,2,1,""],accepts:[1,2,1,""],add_constraint:[1,2,1,""],get_constraints:[1,2,1,""],get_unconstrained_values_by_issue:[1,2,1,""]},"pyneg.comms":{atomic_constraint:[2,0,0,"-"],message:[2,0,0,"-"],offer:[2,0,0,"-"]},"pyneg.comms.atomic_constraint":{AtomicConstraint:[2,1,1,""]},"pyneg.comms.atomic_constraint.AtomicConstraint":{__init__:[2,2,1,""],is_satisfied_by_assignment:[2,2,1,""],is_satisfied_by_offer:[2,2,1,""]},"pyneg.comms.message":{Message:[2,1,1,""]},"pyneg.comms.message.Message":{__init__:[2,2,1,""],get_constraint:[2,2,1,""],has_constraint:[2,2,1,""],is_acceptance:[2,2,1,""],is_empty:[2,2,1,""],is_offer:[2,2,1,""],is_termination:[2,2,1,""]},"pyneg.comms.offer":{Offer:[2,1,1,""]},"pyneg.comms.offer.Offer":{__init__:[2,2,1,""],get_chosen_value:[2,2,1,""],get_issues:[2,2,1,""],get_problog_dists:[2,2,1,""],get_sparse_repr:[2,2,1,""],get_sparse_str_repr:[2,2,1,""],is_assigned:[2,2,1,""]},"pyneg.engine":{constrained_dtp_generator:[3,0,0,"-"],constrained_enum_generator:[3,0,0,"-"],constrained_linear_evaluator:[3,0,0,"-"],constrained_problog_evaluator:[3,0,0,"-"],constrained_random_generator:[3,0,0,"-"],dtp_generator:[3,0,0,"-"],engine:[3,0,0,"-"],enum_generator:[3,0,0,"-"],evaluator:[3,0,0,"-"],generator:[3,0,0,"-"],linear_evaluator:[3,0,0,"-"],problog_evaluator:[3,0,0,"-"],random_generator:[3,0,0,"-"],strategy:[3,0,0,"-"]},"pyneg.engine.constrained_dtp_generator":{ConstrainedDTPGenerator:[3,1,1,""]},"pyneg.engine.constrained_dtp_generator.ConstrainedDTPGenerator":{__init__:[3,2,1,""],_add_utilities:[3,2,1,""],accepts:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],add_utilities:[3,2,1,""],compile_dtproblog_model:[3,2,1,""],discover_constraints:[3,2,1,""],find_violated_constraint:[3,2,1,""],generate_offer:[3,2,1,""],get_constraints:[3,2,1,""],get_unconstrained_values_by_issue:[3,2,1,""],index_max_utilities:[3,2,1,""],reset_generator:[3,2,1,""],satisfies_all_constraints:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.constrained_enum_generator":{ConstrainedEnumGenerator:[3,1,1,""]},"pyneg.engine.constrained_enum_generator.ConstrainedEnumGenerator":{__init__:[3,2,1,""],_add_utilities:[3,2,1,""],accepts:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],add_utilities:[3,2,1,""],discover_constraints:[3,2,1,""],expand_assignment:[3,2,1,""],find_violated_constraint:[3,2,1,""],generate_offer:[3,2,1,""],get_constraints:[3,2,1,""],get_unconstrained_values_by_issue:[3,2,1,""],index_max_utilities:[3,2,1,""],satisfies_all_constraints:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.constrained_linear_evaluator":{ConstrainedLinearEvaluator:[3,1,1,""]},"pyneg.engine.constrained_linear_evaluator.ConstrainedLinearEvaluator":{__init__:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],calc_assignment_util:[3,2,1,""],calc_offer_utility:[3,2,1,""],calc_strat_utility:[3,2,1,""],satisfies_all_constraints:[3,2,1,""]},"pyneg.engine.constrained_problog_evaluator":{ConstrainedProblogEvaluator:[3,1,1,""]},"pyneg.engine.constrained_problog_evaluator.ConstrainedProblogEvaluator":{__init__:[3,2,1,""],_add_utilities:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],calc_assignment_util:[3,2,1,""],calc_offer_utility:[3,2,1,""],calc_strat_utility:[3,2,1,""],get_unconstrained_values_by_issue:[3,2,1,""],satisfies_all_constraints:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.constrained_random_generator":{ConstrainedRandomGenerator:[3,1,1,""]},"pyneg.engine.constrained_random_generator.ConstrainedRandomGenerator":{__init__:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],add_utilities:[3,2,1,""],discover_constraints:[3,2,1,""],find_violated_constraint:[3,2,1,""],generate_offer:[3,2,1,""],get_constraints:[3,2,1,""],get_unconstrained_values_by_issue:[3,2,1,""],index_max_utilities:[3,2,1,""],make_strat_constraint_compliant:[3,2,1,""],satisfies_all_constraints:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.dtp_generator":{DTPGenerator:[3,1,1,""]},"pyneg.engine.dtp_generator.DTPGenerator":{__init__:[3,2,1,""],add_utilities:[3,2,1,""],clean_query_output:[3,2,1,""],compile_dtproblog_model:[3,2,1,""],extend_partial_offer:[3,2,1,""],find_violated_constraint:[3,2,1,""],generate_offer:[3,2,1,""],reset_generator:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.engine":{AbstractEngine:[3,1,1,""],Engine:[3,1,1,""]},"pyneg.engine.engine.AbstractEngine":{__init__:[3,2,1,""],accepts:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],add_utilities:[3,2,1,""],calc_offer_utility:[3,2,1,""],can_continue:[3,2,1,""],find_violated_constraint:[3,2,1,""],generate_offer:[3,2,1,""],get_constraints:[3,2,1,""],get_unconstrained_values_by_issue:[3,2,1,""],satisfies_all_constraints:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.engine.Engine":{__init__:[3,2,1,""],accepts:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],add_utilities:[3,2,1,""],calc_offer_utility:[3,2,1,""],can_continue:[3,2,1,""],find_violated_constraint:[3,2,1,""],generate_offer:[3,2,1,""],get_constraints:[3,2,1,""],get_unconstrained_values_by_issue:[3,2,1,""],satisfies_all_constraints:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.enum_generator":{EnumGenerator:[3,1,1,""]},"pyneg.engine.enum_generator.EnumGenerator":{__init__:[3,2,1,""],_expand_assignment:[3,2,1,""],_offer_from_index_dict:[3,2,1,""],accepts:[3,2,1,""],add_utilities:[3,2,1,""],generate_offer:[3,2,1,""],init_generator:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.evaluator":{Evaluator:[3,1,1,""]},"pyneg.engine.evaluator.Evaluator":{__init__:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],add_utilities:[3,2,1,""],calc_assignment_util:[3,2,1,""],calc_offer_utility:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.generator":{Generator:[3,1,1,""]},"pyneg.engine.generator.Generator":{__init__:[3,2,1,""],add_constraint:[3,2,1,""],add_constraints:[3,2,1,""],add_utilities:[3,2,1,""],find_violated_constraint:[3,2,1,""],generate_offer:[3,2,1,""],get_constraints:[3,2,1,""],get_unconstrained_values_by_issue:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.linear_evaluator":{LinearEvaluator:[3,1,1,""]},"pyneg.engine.linear_evaluator.LinearEvaluator":{__init__:[3,2,1,""],add_utilities:[3,2,1,""],calc_assignment_util:[3,2,1,""],calc_offer_utility:[3,2,1,""],calc_strat_utility:[3,2,1,""],set_utilities:[3,2,1,""]},"pyneg.engine.problog_evaluator":{ProblogEvaluator:[3,1,1,""]},"pyneg.engine.problog_evaluator.ProblogEvaluator":{__init__:[3,2,1,""],add_utilities:[3,2,1,""],calc_assignment_util:[3,2,1,""],calc_offer_utility:[3,2,1,""],calc_probabilities_of_utilities:[3,2,1,""],calc_strat_utility:[3,2,1,""],compile_problog_model:[3,2,1,""]},"pyneg.engine.random_generator":{RandomGenerator:[3,1,1,""]},"pyneg.engine.random_generator.RandomGenerator":{__init__:[3,2,1,""],find_violated_constraint:[3,2,1,""],generate_offer:[3,2,1,""],init_uniform_strategy:[3,2,1,""]},"pyneg.engine.strategy":{Strategy:[3,1,1,""]},"pyneg.engine.strategy.Strategy":{__init__:[3,2,1,""],get_value_dist:[3,2,1,""],keys:[3,2,1,""],normalise_issue:[3,2,1,""],set_prob:[3,2,1,""]},"pyneg.types":{message_type:[4,0,0,"-"],verbosity:[4,0,0,"-"]},"pyneg.types.message_type":{MessageType:[4,1,1,""]},"pyneg.types.message_type.MessageType":{ACCEPT:[4,3,1,""],EMPTY:[4,3,1,""],EXIT:[4,3,1,""],OFFER:[4,3,1,""]},"pyneg.types.verbosity":{Verbosity:[4,1,1,""]},"pyneg.types.verbosity.Verbosity":{debug:[4,3,1,""],messages:[4,3,1,""],none:[4,3,1,""],reasoning:[4,3,1,""]},"pyneg.utils":{utils:[5,0,0,"-"]},"pyneg.utils.utils":{atom_dict_from_nested_dict:[5,4,1,""],atom_from_issue_value:[5,4,1,""],count_acceptable_offers:[5,4,1,""],generate_binary_utility_matrices:[5,4,1,""],generate_gradient_utility_matrices:[5,4,1,""],generate_lex_utility_matrices:[5,4,1,""],generate_random_scenario:[5,4,1,""],insert_difficult_constraints:[5,4,1,""],issue_value_tuple_from_atom:[5,4,1,""],neg_scenario_from_util_matrices:[5,4,1,""],nested_dict_from_atom_dict:[5,4,1,""],setup_random_scenarios:[5,4,1,""]},pyneg:{types:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"abstract":3,"boolean":3,"case":[1,3],"class":[1,2,3,4],"enum":4,"float":[1,2,3,5],"function":[0,1,2,3,7],"int":[1,2,3],"new":[1,3],"public":1,"return":[1,2,3],"static":1,"true":[1,2,3],"while":1,BFS:3,For:[1,2,3],That:1,The:[1,2,3,4],Uses:3,Using:[7,10],__init__:[1,2,3],_accepts_negotiation_propos:1,_add_util:3,_call_for_negoti:1,_expand_assign:3,_offer_from_index_dict:3,_parse_respons:1,_record_messag:1,_should_exit:1,_termin:1,_wait_for_respons:1,about:[1,2,3],absolut:4,abstractengin:3,accept:[1,2,3,4],acceptability_threshold:3,acceptance_threshold:3,acceptbl:3,accord:[1,3],accur:[2,3],act:1,activ:1,actual:[1,3],add:[1,3],add_constraint:[1,3],add_util:[1,3],addapt:2,addaptor:3,added:1,adding:1,addit:[1,3,7],addition:4,agent:[0,2,3,4,7,10],agent_factori:1,agentfactori:1,agre:1,agreement:[1,4],all:[1,2,3],allow:[1,2,3],alwai:3,ani:[2,3],annot:[3,4],anoth:4,api:7,append:1,appropri:[1,3],arbitrari:1,argument:1,asign:3,ask:1,assign:[1,2,3],associ:[1,2,3],asssign:2,assum:[1,3],atom:[0,1,3,4,5,7],atom_dict:5,atom_dict_from_nested_dict:5,atom_from_issue_valu:5,atomic_constraint:[1,2,3],atomicconstraint:[1,2,3],atomicdict:[2,3],attribut:1,auto_constraint:[1,3],back:1,base:[0,2,3,4,7],baselin:2,basic:1,becaus:3,befor:1,being:[1,3],below:3,best:3,between:2,binari:2,bit:1,blah:9,bool:[1,2,3],boolean_fals:3,boolean_tru:3,both:1,breath:3,byt:2,calc_assignment_util:3,calc_offer_util:3,calc_probabilities_of_util:3,calc_strat_util:3,calcul:3,call:1,came:1,can:[1,2,3],can_continu:3,cannot:3,caus:3,check:[1,2,3,4],choic:2,choos:2,chosen:2,clean_query_output:3,comm:[0,1,3,7],commun:[1,2],compat:2,compile_dtproblog_model:3,compile_problog_model:3,complic:2,consid:[1,3],constant:4,constr_ag:1,constr_valu:3,constrain:[0,7],constrained_dtp_gener:[0,7],constrained_enum_gener:[0,7],constrained_linear_evalu:3,constrained_problog_evalu:[0,7],constrained_random_gener:[0,7],constrainedag:1,constraineddtpgener:3,constrainedenumgener:3,constrainedlinearevalu:3,constrainedproblogevalu:3,constrainedrandomgener:3,constraint:[0,3,4,7],constrint:3,constructor:1,contain:[1,2,3],containt:2,content:[0,7],convert:3,correspond:3,cost:3,could:3,count_acceptable_off:5,creat:1,criteria:3,current:[1,3],deal:1,debug:4,decid:[1,3],defin:[1,2,3,4],definitnion:4,describ:4,descript:3,determin:[1,2,3],determinist:3,dict:[1,2,3,5],dictionari:3,dictionarri:3,discover_constraint:3,distribut:[2,3],doe:[1,2],doesn:3,don:[1,3],done:3,dot:3,dtp_gener:[0,7],dtpgener:3,e_i:8,each:[2,3,4],earli:2,easier:4,eighth:3,either:[1,2],elsewher:4,empti:[2,3,4],end:[1,2],engin:[0,1,7],entri:[1,3],entrypoint:1,enum_gener:[0,7],enumer:3,enumgener:3,equal:[1,3],essenti:2,estimate_max_linear_util:1,evalu:[0,7],everyth:[1,4],exactli:2,exampl:[2,3,4,7],except:3,exit:4,expand_assign:3,expcet:3,expect:3,experi:3,explanatori:3,explor:3,express:2,extend_partial_off:3,factori:[0,7,10],fals:[1,2,3],fifth:3,find:[1,3],find_violated_constraint:3,first:[2,3,4],first_a:[2,4],first_b:[2,4],form:2,format:2,forth:3,found:3,fourth:3,from:[2,3],fronteir:3,frozen:2,frozenset:2,full:3,gain:3,gener:[0,1,7],generalis:3,generate_binary_utility_matric:5,generate_gradient_utility_matric:5,generate_lex_utility_matric:5,generate_next_messag:1,generate_off:3,generate_random_scenario:5,genral:1,get:[2,3],get_chosen_valu:2,get_constraint:[1,2,3],get_issu:2,get_problog_dist:2,get_sparse_repr:2,get_sparse_str_repr:[2,3],get_unconstrained_values_by_issu:[1,3],get_unconstrainted_values_by_issu:1,get_value_dist:3,given:3,going:1,good:2,hand:1,handi:2,handl:1,happen:3,happier:1,has:[1,2,3,4],has_constraint:2,hash:2,have:[1,3],help:[2,3],helper:[0,7],here:[1,3],higher:3,hopefulli:4,how:1,hub:1,iff:[2,3],implemant:3,implement:3,imposs:1,includ:1,inconsist:1,incorpor:1,increas:3,indent_level:[2,3],index:3,index_dict:3,index_max_util:3,indic:3,indici:3,individu:2,info:3,inform:[1,3],init_gener:3,init_uniform_strategi:3,initi:[2,3],initial_constraint:[1,3],initialis:1,insert_difficult_constraint:5,instead:2,integer_3:3,intenum:4,intern:3,is_accept:2,is_assign:2,is_empti:2,is_off:2,is_satisfied_by_assign:2,is_satisfied_by_off:2,is_termin:2,issu:[1,2,3,5],issue_value_tuple_from_atom:5,issue_weight:[1,3],iter:[2,3],itself:2,just:[1,2,3,4],kei:3,know:[1,3],knowledg:[1,3],known:[1,3],lead:1,led:4,level:[0,7],like:1,linear:[0,7],linear_evalu:[0,7],linearevalu:3,linter:1,list:[1,3],locat:[1,3],log:[1,2],logic:[1,3],loop:1,lot:1,made:2,main:[1,2],mainli:[1,2],make:1,make_constrained_linear_concession_ag:1,make_constrained_linear_random_ag:1,make_linear_concession_ag:1,make_linear_random_ag:1,make_random_ag:1,make_strat_constraint_compli:3,manner:3,map:[2,3],max_generation_tri:3,max_round:[1,3],mean:[1,2],meaning:1,messag:[0,1,7],message_typ:[2,4],messagetyp:[2,4],method:1,minimum:3,mode:2,modul:[0,1,2,7],more:[1,2,3,4],most:[1,3],mostli:[1,3],msg:1,multipl:3,must:1,name:[1,2],need:3,neg_scenario_from_util_matric:5,neg_spac:[1,3,4],negoat:1,negoti:[1,2,3,4,7,10],negotiaion:1,negotiatin:1,negspac:1,neotiat:1,nest:[2,4],nested_dict:5,nested_dict_from_atom_dict:5,nesteddict:2,never:2,new_constraint:3,new_util:[1,3],next:[1,3],ninth:3,non_agreement_cost:[1,3],none:[1,2,3,4,5],normalise_issu:3,note:[2,3],noth:3,notimplementederror:3,now:1,numb:5,numb_constraint:5,numb_of_scenario:5,object:[1,2,3],offer:[0,1,3,4,7],omega:8,omega_i:8,one:[1,2],onli:[1,2,3,4],oppon:1,oppor:1,option:[1,2,3,4],order:[3,5],other:[1,2],otherwis:1,our:1,out:3,output:4,over:[2,3],overrid:1,overwrit:3,own:[1,3],packag:[0,7],pair:2,param:1,paramet:[1,2,3],pars:1,part:1,parti:2,partial_off:3,pass:[2,3],passthrough:1,perticular:[2,3],place:1,point:1,popos:2,possibl:[1,2,3],potenti:[2,3],prefer:3,previou:3,print:[3,4],priorityqueu:3,prob:3,problog:[2,3],problog_evalu:[0,7],problogevalu:3,product:3,properli:1,propos:[1,3,4],protocol:1,provid:[1,3],purpos:2,put:3,pyneg:[0,1,2],query_output:3,quit:4,rais:[1,2,3],random_gener:[0,7],randomgener:3,reaso:1,reason:[1,2,3,4],receiv:1,receive_messag:1,receive_negotiation_request:1,reciev:1,recipi:2,recipient_nam:2,record:1,refer:[2,3],regist:1,relat:3,reperesent:2,repesend:2,repres:3,request:1,reserv:3,reservation_valu:1,reset_gener:3,respons:1,retreiv:1,rho_a_percentil:5,rho_b_percentil:5,root_dir:5,rtype:[],rule:[1,3],run:1,runtimeerror:[1,2],runtimewarn:1,satisfi:[2,3],satisfies_all_constraint:3,search:3,second:[2,3,4],second_c:[2,4],second_d:[2,4],see:[1,2,3],self:[1,2,3,4],send:1,send_messag:1,sender:[1,2,4],sender_nam:2,sent:[1,4],set:[1,2,3,7,10],set_prob:3,set_util:[1,3],setup:[1,3,9],setup_random_scenario:5,seventh:3,shape:5,should:[1,2,3],sign:3,signal:[1,2],signatur:[2,3],similar:3,similarli:3,simpl:[2,3,7],simpli:3,sinc:1,singl:3,sixth:3,solut:[1,3],sometim:3,sort:3,sorted_offer_indic:3,sourc:[1,2,3,4,5],space:[1,3],spars:2,specif:1,speciffi:1,start:1,still:[1,3],stopiter:3,str:[1,2,3,5],strat:3,strategi:[0,7],string:[1,2],stub:4,submodul:[0,7],success:1,sum:2,sum_:8,support:[1,3],take:[1,3],tau_a:5,tau_b:5,templat:3,termin:[1,3],th4e:1,than:3,thei:1,them:[1,2,3],theori:7,thi:[1,2,3,4],thing:1,third:3,three:3,threshold:3,too:[2,3],transcript:1,triger:1,tupl:[2,3,5],type:[0,1,2,3,7],type_:2,typl:3,u_a:5,u_b:5,unconstrain:[1,3],under:[2,3],understand:4,union:[1,2,3],unknown:3,unsuccessfulli:3,unsucessfulli:1,usag:7,use:3,used:[1,3,4],useful:2,uses:3,using:3,usual:[1,3],util:[0,1,3,7],utilti:3,valid:[2,3],valu:[1,2,3,5],valueerror:2,values_by_issu:[2,3],vaue:3,verbos:[0,3,7],veri:3,violat:3,w_a:5,w_b:5,w_i:8,wai:3,wait:1,want:[1,2,3],weight:3,what:3,whatev:3,when:[1,2,3],whenev:1,where:[1,2,3],whether:[1,2,3],which:[1,2,3],who:1,whole:2,without:[1,4],work:3,worth:3,would:[1,3],wrapper:[0,7],you:[2,3],your:3},titles:["API","Agents","Comms","Engine","pyneg.types package","pyneg.utils package","Examples","Welcomde to PyNeg\u2019s documentation!","Negotiation theory 101","Setting up agents for a negotiation","Usage Examples"],titleterms:{"function":5,Using:9,addit:8,agent:[1,6,9],api:0,atom:2,base:1,comm:2,constrain:3,constrained_dtp_gener:3,constrained_enum_gener:3,constrained_problog_evalu:3,constrained_random_gener:3,constraint:[1,2],content:4,document:7,dtp_gener:3,engin:3,enum_gener:3,evalu:3,exampl:[6,10],factori:[1,9],gener:3,helper:5,level:4,linear:[3,8],linear_evalu:3,messag:[2,4],modul:[3,4],negoti:[8,9],offer:2,packag:[4,5],problog_evalu:3,pyneg:[3,4,5,7],random_gener:3,set:9,simpl:6,strategi:3,submodul:[4,5],theori:8,type:4,usag:10,util:5,verbos:4,welcomd:7,wrapper:3}})