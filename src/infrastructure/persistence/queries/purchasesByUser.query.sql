select
  pu.mpur_id,
  pu.mpur_date,
  pu.mpur_discount,
  pu.mpur_price,
  pu.mpur_shipping_cost,
  pu.mbpr_id,
  pu.user_id
from
  public.pf_med_purchase pu
where
  pu.user_id = $1
order by
  pu.mpur_id asc;