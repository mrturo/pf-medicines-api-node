select
  fr.mfre_id,
  fr.mfre_every_hours,
  fr.mfre_quantity
from
  public.pf_med_frecuency fr
order by
  fr.mfre_id asc;